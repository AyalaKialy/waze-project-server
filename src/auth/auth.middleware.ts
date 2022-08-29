import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as firebase from 'firebase-admin';
import * as serviceAccount from './firebaseServiceAccount.json';
import {
  getFirestore,
  query,
  getDoc,
  collection,
  where,
  addDoc,
  Firestore,
  doc,
  getDocs,
} from 'firebase/firestore';
import { UserService } from 'src/user/user.service';
import { ManagerService } from 'src/manager/manager.service';

const config = {
  apiKey: 'AIzaSyBk-gdTc1sB3rJuXTDIBFdpLc3k1KwSTpc',
  authDomain: 'waze-project-b846f.firebaseapp.com',
  projectId: 'waze-project-b846f',
  storageBucket: 'waze-project-b846f.appspot.com',
  messagingSenderId: '767933284652',
  appId: '1:767933284652:web:9f222400d4458d94c32c89',
  measurementId: 'G-PY51848955',
};

const firebase_params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientX509CertUrl: serviceAccount.client_x509_cert_url,
};

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private defaultApp: any;
  private managerService: ManagerService;
  private userService: UserService;
  constructor() {
    this.defaultApp = firebase.initializeApp({
      credential: firebase.credential.cert(firebase_params),
      projectId: 'waze-project-b846f',
    });
  }

  use(req: Request, res: Response, next: Function) {
    console.log('wow1' + req.body);
    const token = req.headers.authorization;
    if (token != null && token != '') {
      console.log(`token: ${token}`);
      this.defaultApp
        .auth()
        .verifyIdToken(token.replace('Bearer ', ''))
        .then(async (decodedToken) => {
          console.log('wow2');
          console.log(decodedToken);
          const uid = await decodedToken.uid;
          console.log(uid);
          // const user = await this.userService.getUserByUId(uid);
          // // const manager =
          // //   await this.managerService.getManagerByUserIdAndSystemId(user.id,);
          // if (uid === user.uid) {
          next();
          // } else {
          //   alert('user not access');
          // }
        })
        .catch(() => {
          this.accessDenied(req.url, res);
        });
    } else {
      next();
    }
  }

  private accessDenied(url: string, res: Response) {
    res.status(403).json({
      statusCode: 403,
      timestamp: new Date().toISOString(),
      path: url,
      message: 'Access Denied',
    });
  }
}

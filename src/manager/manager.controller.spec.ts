import { Test, TestingModule } from '@nestjs/testing';
import { ManagerController } from './manager.controller';
import { ObjectId } from 'mongodb';
import { ManagerService } from './manager.service';
import { Manager, ManagerSchema } from './manager.model';
import { Model } from 'mongoose';

describe('ManagerController', () => {
  let controller: ManagerController;
  let service: ManagerService;

  beforeEach(() => {
    // const module: TestingModule = await Test.createTestingModule({
    //   controllers: [UserController],
    //   providers: [UserService],
    // }).compile();
    // controller = module.get<UserController>(UserController);
    let manager: Model<Manager>;
    service = new ManagerService(manager);
    controller = new ManagerController(service);
  });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });

  describe('controller', () => {
    it('getManagerById must get id', () => {
      controller.getManagerById('').then((res) => {
        expect(res).toBe(404);
      });
    });
    // it('getUserById must get id', () => {
    //   const userId = '62f0ec7ecb1d8c6527ef7ef9';
    //   controller.getUserById(userId).then((res) => {
    //     expect(res).toBe({
    //       _id: '62f0ec7ecb1d8c6527ef7ef9',
    //       role: 'manager',
    //       __v: 0,
    //     });
    //   });
    // });
    describe('service', () => {
      it('getAll should return an array of managers', () => {
        const result = service.getManagers();
        expect(typeof result).toEqual(typeof []);
      });
      //   it('getUserById should return an object ', () => {
      //     const userId = '62f0ec7ecb1d8c6527ef7ef9';
      //     const result = service.getUserById(userId);
      //     expect(typeof result).toEqual(typeof {});
      //   });
    });
  });
});

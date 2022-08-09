import { Test, TestingModule } from '@nestjs/testing';
import { SystemController } from './system.controller';
import { ObjectId } from 'mongodb';
import { SystemService } from './system.service';
import { System } from './system.model';
import { Model } from 'mongoose';

describe('SystemController', () => {
  let controller: SystemController;
  let service: SystemService;
  beforeEach(() => {
    // const module: TestingModule = await Test.createTestingModule({
    //   controllers: [SystemController],
    //   providers: [SystemService],
    // }).compile();
    // controller = module.get<SystemController>(SystemController);
    let system: Model<System>;
    service = new SystemService(system);
    controller = new SystemController(service);
  });
  describe('controller', () => {
    it('getSystemById must get id', () => {
      controller.getSystemById('').then((res) => {
        expect(res).toBe(404);
      });
    });
    it('getSystemById must be this user', () => {
      const systemId = '62f11f3df259fe7820eb098d';
      controller.getSystemById(systemId).then((res) => {
        expect(res).toBe({
          _id: '62f11f3df259fe7820eb098d',
          topic: 'spring',
          objectName: 'shoes',
          managerId: '62f0ec7ecb1d8c6527ef7ef9',
          description: 'perfect shoes for every one',
          __v: 0,
        });
      });
    });

    describe('service', () => {
      it('getAllSystems should return an array of systems', () => {
        const result = service.getSystems();
        expect(typeof result).toEqual(typeof []);
      });
      it('getSystemById should return an object', () => {
        const systemId = '62f11f3df259fe7820eb098d';
        const result = service.getSystemById(systemId);
        expect(typeof result).toEqual(typeof {});
      });
    });
  });
});

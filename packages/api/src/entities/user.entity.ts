import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
} from 'typeorm';

import ContextBaseEntity from './context/base'

export enum enumStatus {
  READY = 0,
  IDLE = 1,
  BLOCK = 2,
  LEAVE = 3
}

export enum enumType {
  USER = 0,
  VENDOR = 1,
  OPERATOR = 2,
  MANAGER = 3,
  ADMIN = 4,
}

@Index(['nickname'])
@Entity('users')
export default class UserEntity extends ContextBaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id!: string;

  @Column({
    name: 'username',
    type: 'varchar',
    nullable: true,
  })
  nickname: string;

  @Column({
    type: 'enum',
    name: 'status',
    enum: enumStatus,
    default: enumStatus.READY,
    nullable: true,
  })
  readonly status?: enumStatus;

  @Column({
    type: 'enum',
    name: 'type',
    enum: enumType,
    default: enumType.USER,
    nullable: true,
  })
  readonly type?: enumType;
}



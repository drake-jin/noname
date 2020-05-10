import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

import ContextBaseEntity from './context/base'


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
}



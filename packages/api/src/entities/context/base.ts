import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn
} from 'typeorm';

export enum enumLastUpdatedFrom {
  SERVICE = 0,
  ADMIN = 1,
  MIGRATION = 2,
  DBMS = 3,
}


export default abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp with time zone',
  })
  createdAt!: Date;

  @Column({
    name: 'created_by',
    type: 'bigint',
  })
  createdBy: number;

  @UpdateDateColumn({
    name: 'last_updated_at',
    type: 'timestamp with time zone',
  })
  lastUpdatedAt!: Date;

  @Column({
    name: 'last_updated_by',
    type: 'bigint',
  })
  lastUpdatedBy: number;

  @Column({
    type: 'enum',
    enum: enumLastUpdatedFrom,
    default: enumLastUpdatedFrom.SERVICE,
    nullable: true,
  })
  readonly lastUpdatedFrom?: enumLastUpdatedFrom;
}
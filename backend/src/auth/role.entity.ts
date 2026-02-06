import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm';
import { User } from '../users/user.entity';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ type: 'jsonb', default: [] })
  permissions: string[];

  @CreateDateColumn()
  created_at: Date;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}

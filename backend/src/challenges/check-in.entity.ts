import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('check_ins')
export class CheckIn {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  user_id: string;
}

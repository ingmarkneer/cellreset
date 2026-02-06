import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('challenge_instances')
export class ChallengeInstance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  user_id: string;
}

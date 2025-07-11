import { PrimaryGeneratedUuidV7Column } from 'src/decorators';
import { Column, CreateDateColumn, Generated, Table, Timestamp } from 'src/sql-tools';

@Table('albums_audit')
export class AlbumAuditTable {
  @PrimaryGeneratedUuidV7Column()
  id!: Generated<string>;

  @Column({ type: 'uuid', indexName: 'IDX_albums_audit_album_id' })
  albumId!: string;

  @Column({ type: 'uuid', indexName: 'IDX_albums_audit_user_id' })
  userId!: string;

  @CreateDateColumn({ default: () => 'clock_timestamp()', indexName: 'IDX_albums_audit_deleted_at' })
  deletedAt!: Generated<Timestamp>;
}

-- NOTE: This file is auto generated by ./sql-generator

-- SyncCheckpointRepository.getAll
select
  "type",
  "ack"
from
  "session_sync_checkpoints"
where
  "sessionId" = $1

-- SyncCheckpointRepository.deleteAll
delete from "session_sync_checkpoints"
where
  "sessionId" = $1

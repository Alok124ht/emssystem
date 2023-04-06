import React from 'react';
import Edge from './edge';
const Edge = ({ topVertexType, bottomVertexType }) => {
  const isPresenceEdge = topVertexType === 'Out' && bottomVertexType === 'In';
  const isAbsenceEdge = topVertexType === 'In' && bottomVertexType === 'Out';

  const edgeType = isPresenceEdge ? 'Presence Edge' : isAbsenceEdge ? 'Absence Edge' : 'Unknown Edge';

  return (
    <div>
      <p>{edgeType}</p>
    </div>
  );
};





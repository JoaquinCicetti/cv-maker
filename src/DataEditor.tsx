import React from 'react';

interface Data {
  data: {
    string: Object | Array<Data>
  }
}

const DataEditor: React.FC<Data> = props => {

  const { data } = props

  return <div>
    {
      Object.entries(data).map(([key, value]) => {
        return <p>{key}</p>
      })
    }
  </div>
}

export default DataEditor
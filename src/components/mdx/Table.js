import styled from '@emotion/styled'

export const Table = styled('table')`
  margin-top: 10px;
  border-collapse: collapse;
  & thead th {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 10px;
    text-align: left;
    color: #4a4a4a;
  }

  & tbody td {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 10px;
    max-width: 500px;
    color: #4a4a4a;
  }

  & tbody > tr {
    display: table-row;
  }
`
export default Table

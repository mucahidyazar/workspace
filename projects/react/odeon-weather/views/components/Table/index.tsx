import { connect } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import Icon from '../../ui/Icon'
import { getDate } from '../../../config/helper/getHours'
import { deleteWeather } from '../../../redux/actions'

interface TableComponentInterface {
  dispatch: any
  datas: any
}

const TableComponent: React.FC<TableComponentInterface> = ({
  datas,
  dispatch,
}) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>City</th>
            {getDate().map((date) => (
              <th key={date}>{date}</th>
            ))}
            <th>Choose</th>
          </tr>
        </thead>
        <tbody>
          {datas?.map((data, index) => {
            return (
              <tr key={uuidv4().toString()}>
                <td>{data.city.name}</td>
                {data.list.map((el, index) => {
                  if (index < 8) {
                    return <td key={el.dt}>{el.main.temp} C°</td>
                  }
                })}
                <td>
                  <button className="btn btn-primary mr-2">
                    <Icon icon="save-disk" />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(deleteWeather(index))
                    }}
                  >
                    <Icon icon="trash" />
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    datas: state.main.datas,
  }
}

export default connect(mapStateToProps)(TableComponent)

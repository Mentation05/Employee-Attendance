import React, { useState } from 'react'
import './Payslip.scss'

const Payslip = () => {
  const [payslips] = useState([
    {
      id: 1,
      name: 'Bernardo Galaviz',
      role: 'Web Developer',
      amount: '$200',
      month: 'Apr',
      year: 2019,
    },
    {
      id: 2,
      name: 'Jeffrey Warden',
      role: 'Web Developer',
      amount: '$300',
      month: 'Dec',
      year: 2020,
    },
    { id: 3, name: 'John Doe', role: 'Web Designer', amount: '$400', month: 'Jun', year: 2020 },
    {
      id: 4,
      name: 'John Smith',
      role: 'Android Developer',
      amount: '$500',
      month: 'Feb',
      year: 2020,
    },
    {
      id: 5,
      name: 'Mike Litorus',
      role: 'IOS Developer',
      amount: '$600',
      month: 'Jan',
      year: 2020,
    },
  ])

  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage] = useState(4)

  const [filterName, setFilterName] = useState('')
  const [filterMonth, setFilterMonth] = useState('')
  const [filterYear, setFilterYear] = useState('')

  const indexOfLastPayslip = currentPage * rowsPerPage
  const indexOfFirstPayslip = indexOfLastPayslip - rowsPerPage
  const currentPayslips = payslips.slice(indexOfFirstPayslip, indexOfLastPayslip)

  const totalPages = Math.ceil(payslips.length / rowsPerPage)

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const filteredPayslips = currentPayslips.filter(
    (payslip) =>
      payslip.name.toLowerCase().includes(filterName.toLowerCase()) &&
      (filterMonth === '' || payslip.month === filterMonth) &&
      (filterYear === '' || payslip.year.toString() === filterYear),
  )

  return (
    <div className="payslip-report">
      <h2>Payslip Reports</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Employee Name"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
        <select value={filterMonth} onChange={(e) => setFilterMonth(e.target.value)}>
          <option value="">Month</option>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
        </select>
        <input
          type="text"
          placeholder="Year"
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
        />
        <button onClick={() => setCurrentPage(1)}>Search</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Employee Name</th>
            <th>Paid Amount</th>
            <th>Payment Month</th>
            <th>Payment Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayslips.map((payslip, index) => (
            <tr key={payslip.id}>
              <td>{index + 1}</td>
              <td>
                {payslip.name} {payslip.role}
              </td>
              <td>{payslip.amount}</td>
              <td>{payslip.month}</td>
              <td>{payslip.year}</td>
              <td>
                <button className="pdf-btn">PDF</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Payslip;

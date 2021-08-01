import React from 'react'

export const EmployeeList = ({empList}) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Emp ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empList.map((emp) => {
                            return(
                                <tr>
                                    <td>{emp.eid}</td>
                                    <td>{emp.eName}</td>
                                    <td>{emp.eEmail}</td>
                                    <td>{emp.eSalary}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

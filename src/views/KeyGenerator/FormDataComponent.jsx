import React from 'react';
import { Form } from 'react-bootstrap';

const FormDataComponent = ({ formData, handleInputChange, disabled }) => {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>SN</th>
            <th>Page No.</th>
            <th>Q#</th>
            <th>Key</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.sn}</td>
              <td>
                <Form.Control
                  size="sm"
                  type="text"
                  value={data.page}
                  onChange={(e) => handleInputChange(index, 'page', e.target.value)}
                  disabled={disabled} // Disable the input field if form is submitted and not in editing mode
                />
              </td>
              <td>
                <Form.Control
                  size="sm"
                  type="text"
                  value={data.qNumber}
                  onChange={(e) => handleInputChange(index, 'qNumber', e.target.value)}
                  disabled={disabled} // Disable the input field if form is submitted and not in editing mode
                />
              </td>
              <td>
                <Form.Control
                  size="sm"
                  type="text"
                  value={data.key}
                  onChange={(e) => handleInputChange(index, 'key', e.target.value)}
                  disabled={disabled} // Disable the input field if form is submitted and not in editing mode
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormDataComponent;

import { useState } from 'react';
import './App.css';

function App() {
  const [formFields, setFormFields] = useState([
    { name: '', age: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
  }

  const addFields = () => {
    let object = {
      name: '',
      age: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            {JSON.stringify(formFields)}
          {formFields.map((form, index) => {
          return (
              <div className="row" key={index}>
           
              <div className="col">
              <input
                name='name'
                className="form-control mb-2"
                placeholder='Name'
                onChange={event => handleFormChange(event, index)}
                value={form.name}
              />
              </div>
              <div className="col">
              <input
                name='age'
                placeholder='Age'
                className="form-control mb-2"
                onChange={event => handleFormChange(event, index)}
                value={form.age}
              />
                </div>
             <div className="col-1">
             <button className="btn btn-danger" onClick={() => removeFields(index)}>Remove</button>
             </div>
            </div>
           
          )
        })}
          </div>
        </div>
       
      </form>
      <div className="row justify-content-center">
      <button className="btn btn-success col-2" onClick={addFields}>Add More..</button>
      <p></p>
      <button className="btn btn-primary col-2 " onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react'
import '../../src/App.css';
import axios from 'axios';
function CreateMember() {

  const [memberInfo, setMemberInfo] = useState({
    name: "",
    email: "",
    phone: "",
    country: ""
  });

  const handleChange = (event) => {
    setMemberInfo({ ...memberInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(memberInfo);
    axios.post('http://localhost:4042/createMember', memberInfo)
      .then(res => console.log(res.data));
    setMemberInfo({ name: '', email: '', phone: '', country: '' });
    window.location.reload(false);
  };

  return (
    <div className='container'>
      <h1> Register A Member</h1>
      <form onSubmit={handleSubmit} className="create-form">
        <input
          value={memberInfo.name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Name"
        />

        <br />

        <input
          value={memberInfo.email}
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Email"
        />
        <br />
        <input
          value={memberInfo.phone}
          name="phone"
          onChange={handleChange}
          type="number"
          placeholder="Phone Number"
        />

        <br />
        <input
          value={memberInfo.country}
          name="country"
          onChange={handleChange}
          type="text"
          placeholder="Country"
        />
        <br />

        <button className="submit-button" type='submit'>Create A Member </button>

      </form>
    </div>
  )
}

export default CreateMember;
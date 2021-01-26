const InfoPerson = (props) => {
  return (
    <div style={{ margin: 20 }}>
      <h1>Datos</h1>
      <label>Name:</label>
      <h4>{`${props.data.name} ${props.data.lastname}`}</h4>
      <label>Email:</label>
      <h4>{`${props.data.email}`}</h4>
      <label>Phones:</label>
      {props.data.phones.map((item, idx) => (
        <>
          <br />
          <label>Phone({idx + 1}):</label>
          <p key={idx}>{`${item.type} - ${item.phone}`}</p>
        </>
      ))}
    </div>
  );
};

export default InfoPerson;

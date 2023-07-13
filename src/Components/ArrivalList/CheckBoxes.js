function CheckBoxes() {
  return (
    <div>
      <input type="checkbox" id="writeWeight"></input>
      <label for="writeWeight">抄重量</label>
      <input type="checkbox" id="mixPallet"></input>
      <label for="mixPallet">混合板</label>
      <input type="checkbox" id="sortExpiry"></input>
      <label for="sortExpiry">分效期</label>
    </div>
  );
}

export default CheckBoxes;

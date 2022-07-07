import React from 'react';
import { useParams } from 'react-router-dom';

import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const UserEdit = () => {
  const params = useParams();
  const [item, setItem] = useState(null);
//   let navigate = useNavigate();

  useEffect(() => {
    console.log('user use effect!!');
    if (params.id != 'new') {
      let item_url =
        'https://62c63193a361f72512968244.mockapi.io/api/rooms/' + params.id;

      console.log(item_url);
      fetch(item_url)
        .then((response) => response.json())
        .then((data) => {
          setItem(data);
        });
    } else {
      let initData = {};
      //initData.firstName="";
      //initData.lastName="";

      setItem(initData);
    }
  }, []);

  var str2bool = (value) => {
    if (value && typeof value === 'string') {
      if (value.toLowerCase() === 'true') return true;
      if (value.toLowerCase() === 'false') return false;
    }
    return value;
  };

  const handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    let data = { ...item };
    data.fields[name] = value;

    if (name == 'breakfast') {
      data.fields[name] = str2bool(value);
      console.log('breakfast');
      console.log(data[value]);
    }

    console.log(data);
    setItem(data);
  };

  const saveUser = () => {
    let myMethod = 'POST';
    let id = '';
    if (item.id) {
      myMethod = 'PUT';
      id = item.id;
      console.log(item)
    }
    const requestOptions = {
      method: myMethod,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    };
    fetch(
      'https://62c63193a361f72512968244.mockapi.io/api/rooms/'+id,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        // var date = new Date(data.dob);
        // data.dob = date.getTime();

        console.log(data);
        // navigate(-1);
      });
    //   <Redirect to="/admin" />

  };

  return (
    <>
    {item != null ? (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
          <div>
            <h1 className="display-4 text-center">Chỉnh sửa thông tin phòng</h1>
          </div>

          <div className="row my-4">
            <div className="col-md-12 col-12 my-auto">
              <div className="col-md-12 col-12 float-right">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={item.fields.name}
                      onChange={(e) => handleChange(e)}
                      id="name"
                      name="name"
                      placeholder="Room name."
                      required
                    />
                    <label htmlFor="type">Type</label>
                    <input
                      type="text"
                      className="form-control"
                      value={item.fields.type}
                      onChange={(e) => handleChange(e)}
                      id="type"
                      name="type"
                      placeholder="Room type"
                      required
                    />

                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      value={item.fields.price}
                      onChange={(e) => handleChange(e)}
                      className="form-control"
                      required
                      id="price"
                      name="price"
                      placeholder="Room price"
                    />
                    <label htmlFor="size">Size</label>
                    <input
                      type="number"
                      className="form-control"
                      value={item.fields.size}
                      onChange={(e) => handleChange(e)}
                      required
                      id="size"
                      name="size"
                      placeholder="Room Size"
                    />
                    <label htmlFor="capacity">Capacity</label>
                    <input
                      type="number"
                      value={item.fields.capacity}
                      onChange={(e) => handleChange(e)}
                      className="form-control"
                      required
                      id="capacity"
                      name="capacity"
                      placeholder="Capacitiy"
                    />
                    <div className="custom-control custom-checkbox my-1">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        checked={item.fields.breakfast}
                        onChange={(e) => handleChange(e)}
                        name="breakfast"
                        id="breakfast"
                      />
                      <label
                        htmlFor="breakfast"
                        className="custom-control-label"
                      >
                        Breakfast
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox my-1">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="pets"
                        checked={item.fields.pets}
                        onChange={(e) =>handleChange(e)}
                        id="pets"
                      />
                      <label htmlFor="pets" className="custom-control-label">
                        Pets
                      </label>
                    </div>

                    <label htmlFor="description">Description</label>
                    <textarea
                      className="form-control"
                      value={item.fields.description}
                      onChange={(e) => handleChange(e)}
                      id="description"
                      name="description"
                      placeholder="Short description of room."
                      rows="3"
                    ></textarea>
                    {console.log}

                    {/* <label htmlFor="extras">Extras</label>
                    <textarea
                      className="form-control"
                      value={item.fields.extras}
                      onChange={(e) => handleChange(e)}
                      id="extras"
                      placeholder="Separated by comma ( , )"
                      rows="3"
                    ></textarea>

                    <label htmlFor="img1">Image 1</label>
                    <input
                      type="text"
                      value={item.images.fields[0].file.url}
                      onChange={(e) => handleChange(e)}
                      className="form-control"
                      id="img1"
                      placeholder="Image 1 URL"
                      required
                    />
                    <label htmlFor="img2">Image 2</label>
                    <input
                      type="text"
                      className="form-control"
                      value={item.images.fields[1].file.url}
                      onChange={(e) => handleChange(e)}
                      id="img2"
                      placeholder="Image 2 URL"
                      required
                    />

                    <label htmlFor="img3">Image 3</label>
                    <input
                      type="text"
                      value={item.images.fields[2].file.url}
                      onChange={(e) => handleChange(e)}
                      className="form-control"
                      id="img3"
                      placeholder="Image 3 URL"
                      required
                    />

                    <label htmlFor="img4">Image 4</label>
                    <input
                      type="text"
                      value={item.images.fields[3].file.url}
                      onChange={(e) => handleChange(e)}
                      className="form-control"
                      id="img4"
                      placeholder="Image 4 URL"
                      required
                    /> */}
                  </div>

                  <div className="form-group form-check"></div>
                </form>
                <Link to="/admin">
                <button
                  className="btn btn-block btn-outline-primary"
                  onClick={saveUser}
                >
                  ADD ROOM
                </button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     ) : (
        <div class="d-flex align-items-center">
          <strong>Loading...</strong>
          <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
        </div>
      )}
    </>   
  );
};

export default UserEdit;
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../style.css';

// const UserEdit = () => {
//   const params = useParams();
//   const [item, setItem] = useState(null);
//   let navigate = useNavigate();

//   useEffect(() => {
//     console.log('user use effect!!');
//     if (params.id != 'new') {
//       let item_url =
//         'https://62c63193a361f72512968244.mockapi.io/api/rooms/' + params.id;

//       console.log(item_url);
//       fetch(item_url)
//         .then((response) => response.json())
//         .then((data) => {
//           //change date
//           var date = new Date(data.dob);
//           data.dob = date.toISOString().slice(0, 10);
//           console.log(data.dob);
//           setItem(data);
//         });
//     } else {
//       let initData = {};
//       //initData.firstName="";
//       //initData.lastName="";

//       setItem(initData);
//     }
//   }, []);

//   var str2bool = (value) => {
//     if (value && typeof value === 'string') {
//       if (value.toLowerCase() === 'true') return true;
//       if (value.toLowerCase() === 'false') return false;
//     }
//     return value;
//   };

//   const handleChange = (event) => {
//     console.log(event);
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;

//     console.log(name);
//     let data = { ...item };
//     data[name] = value;

//     if (name == 'breakfast'|| name== 'pet') {
//       data[name] = str2bool(value);
//       console.log('breakfast');
//       console.log(data[name]);
//     }

//     console.log(data);
//     setItem(data);
//   };

//   // const handleChangeHome = (event) => {
//   //   //console.log(event);
//   //   const target = event.target;
//   //   const value = target.value;
//   //   const name = target.name;
//   //   console.log(name);
//   //   console.log(value);
//   //   let data = { ...item };
//   //   data.home[name] = value;

//   //   console.log(data);
//   //   setItem(data);
//   // };

//   const saveUser = () => {
//     let myMethod = 'POST';
//     let id = '';
//     if (item.id) {
//       myMethod = 'PUT';
//       id = item.id;
//     }
//     const requestOptions = {
//       method: myMethod,
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(item),
//     };
//     fetch(
//       'https://62c63193a361f72512968244.mockapi.io/api/rooms' + id,
//       requestOptions
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         var date = new Date(data.dob);
//         data.dob = date.getTime();

//         console.log(data);
//         navigate(-1);
//       });
//   };

//   return (
//     <>
//     {item != null ? (
//     <div className="container my-5">
//       <div className="row">
//         <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
//           <div>
//             <h1 className="display-4 text-center">Add Room</h1>
//           </div>

//           <div className="row my-4">
//             <div className="col-md-12 col-12 my-auto">
//               <div className="col-md-12 col-12 float-right">
//                 <form>
//                   <div className="form-group">
//                     <label htmlFor="name">Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={name}
//                       onChange={(e) => handleChange(e)}
//                       id="name"
//                       placeholder="Room name."
//                       required
//                     />
//                     <label htmlFor="type">Type</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={type}
//                       onChange={(e) => handleChange(e)}
//                       id="type"
//                       placeholder="Room type"
//                       required
//                     />

//                     <label htmlFor="price">Price</label>
//                     <input
//                       type="number"
//                       value={price}
//                       onChange={(e) => handleChange(e)}
//                       className="form-control"
//                       required
//                       id="price"
//                       placeholder="Room price"
//                     />
//                     <label htmlFor="size">Size</label>
//                     <input
//                       type="number"
//                       className="form-control"
//                       value={size}
//                       onChange={(e) => handleChange(e)}
//                       required
//                       id="size"
//                       placeholder="Room Size"
//                     />
//                     <label htmlFor="capacity">Capacity</label>
//                     <input
//                       type="number"
//                       value={capacity}
//                       onChange={(e) => handleChange(e)}
//                       className="form-control"
//                       required
//                       id="capacity"
//                       placeholder="Capacitiy"
//                     />
//                     <div className="custom-control custom-checkbox my-1">
//                       <input
//                         type="checkbox"
//                         className="custom-control-input"
//                         checked={breakfast}
//                         onChange={() => handleChange(e)}
//                         name="breakfast"
//                         id="breakfast"
//                       />
//                       <label
//                         htmlFor="breakfast"
//                         className="custom-control-label"
//                       >
//                         Breakfast
//                       </label>
//                     </div>
//                     <div className="custom-control custom-checkbox my-1">
//                       <input
//                         type="checkbox"
//                         className="custom-control-input"
//                         name="pets"
//                         checked={pets}
//                         onChange={() =>handleChange(e)}
//                         id="pets"
//                       />
//                       <label htmlFor="pets" className="custom-control-label">
//                         Pets
//                       </label>
//                     </div>

//                     <label htmlFor="description">Description</label>
//                     <textarea
//                       className="form-control"
//                       value={description}
//                       onChange={(e) => handleChange(e)}
//                       id="description"
//                       placeholder="Short description of room."
//                       rows="3"
//                     ></textarea>

//                     <label htmlFor="extras">Extras</label>
//                     <textarea
//                       className="form-control"
//                       value={extras}
//                       onChange={(e) => handleChange(e)}
//                       id="extras"
//                       placeholder="Separated by comma ( , )"
//                       rows="3"
//                     ></textarea>

//                     <label htmlFor="img1">Image 1</label>
//                     <input
//                       type="text"
//                       value={image1}
//                       onChange={(e) => handleChange(e)}
//                       className="form-control"
//                       id="img1"
//                       placeholder="Image 1 URL"
//                       required
//                     />
//                     <label htmlFor="img2">Image 2</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={image2}
//                       onChange={(e) => handleChange(e)}
//                       id="img2"
//                       placeholder="Image 2 URL"
//                       required
//                     />

//                     <label htmlFor="img3">Image 3</label>
//                     <input
//                       type="text"
//                       value={image3}
//                       onChange={(e) => handleChange(e)}
//                       className="form-control"
//                       id="img3"
//                       placeholder="Image 3 URL"
//                       required
//                     />

//                     <label htmlFor="img4">Image 4</label>
//                     <input
//                       type="text"
//                       value={image4}
//                       onChange={(e) => handleChange(e)}
//                       className="form-control"
//                       id="img4"
//                       placeholder="Image 4 URL"
//                       required
//                     />
//                   </div>

//                   <div className="form-group form-check"></div>
//                 </form>
//                 <button
//                   className="btn btn-block btn-outline-primary"
//                   onClick={saveUser}
//                 >
//                   ADD ROOM
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//      ) : (
//         <div class="d-flex align-items-center">
//           <strong>Loading...</strong>
//           <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
//         </div>
//       )}
//     </>   
//   );
// };

// export default UserEdit;
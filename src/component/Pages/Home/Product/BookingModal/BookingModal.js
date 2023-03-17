import React, { useContext } from "react";
import { AuthContext } from "../../../../../Contexts/UserContext";

const BookingModal = ({ product }) => {
  const { author } = product;
  const { user } = useContext(AuthContext);
  const divisions = [
    {
      id: 1,
      name: "Dhaka",
    },
    {
      id: 2,
      name: "Sylhet",
    },
    {
      id: 3,
      name: "Chattogram",
    },
    {
      id: 4,
      name: "Rangpur",
    },
    {
      id: 5,
      name: "Kulna",
    },
    {
      id: 6,
      name: "Rajshahi",
    },
    {
      id: 7,
      name: "Mymensingh",
    },
    {
      id: 8,
      name: "Barishal",
    },
  ];
  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const division = form.division.value;
    const email = form.email.value;
    const district = form.district.value;
    const number = form.number.value;
    const mainAddress = form.mainAddress.value;

    const booking = {
      customer: name,
      division: division,
      district: district,
      area: mainAddress,
      email,
      number

    }
    console.log(booking)

  }
  return (
    <>
      <div>
        <input type="checkbox" id="bookingModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box ">
            <label
              htmlFor="bookingModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold mb-4 text-center">
              Product: {author.name}
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Name"
                className="input input-bordered  w-full mb-3"
              />
             
              <select name="division" className="select select-info w-full mb-3">
               {
                divisions.map(division => <option
                  division={division}
                  key={division.id}
                  value={division.name}
                >{division.name}</option>)
               }
              </select>
              <input
                name="district"
                type="text"
                className="input input-bordered  w-full mb-3"
                placeholder="Districts Name"
                required
              />
               <input
                name="mainAddress"
                type="text"
                className="input input-bordered  w-full mb-3"
                placeholder="House No / street / Building No / Area"
                required
              />
              <input
                type="email"
                defaultValue={user?.email}
                disabled
                name="email"
                placeholder="Your email"
                className="input input-bordered  w-full mb-3"
                required
              />

              <input
                type="text"
                name="number"
                placeholder="Phone number"
                className="input input-bordered  w-full mb-3"
              />

              <input
                className="mt-5 text-center w-full bg-slate-900 py-2 px-5 text-white font-bold rounded-xl"
                type="submit"
                value="Order"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

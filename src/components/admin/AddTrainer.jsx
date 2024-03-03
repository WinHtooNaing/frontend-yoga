import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TrainerForm } from "../../hooks/TrainerForm";
import { addTrainer } from "../../services/trainerLocalstorage";
import Swal from "sweetalert2";

const AddTrainer = () => {

  const navigate = useNavigate();

  const {inputValues,handleInputChange,resetForm} = TrainerForm({
    name:'',
    article:'',
    image:'',
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    addTrainer(inputValues);
    resetForm();
    navigate("/admin/")
    Swal.fire({
      title: "Success",
      text: " Trainer creating successful",
      icon: "success",
      confirmButtonText: "OK",
    });
  }
  return (
    <>
      <section id="content">
        <div class="table-data" style={{ width: "80%", marginLeft: "10%" }}>
          <div class="order">
            <div class="head">
              <h3>Add Trainer</h3>
            </div>
            <Link to="/admin/">
              <button
                className="btn btn-success"
                style={{ marginBottom: "20px" }}
              >
                back
              </button>
            </Link>

            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" id="name" name="name" value={inputValues.name} onChange={handleInputChange}/>
              </div>
              <div class="mb-3">
                <label class="form-label">Article</label>
                <input type="text" class="form-control" id="article" name="article" value={inputValues.article} onChange={handleInputChange}/>
              </div>
              <div class="mb-3">
                <label class="form-label">image</label>
                <input type="text" class="form-control" id="image" name="image" value={inputValues.image} onChange={handleInputChange}/>
              </div>

              <button type="submit" class="btn btn-primary">
                Add
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddTrainer;

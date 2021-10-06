const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp);

describe("/GET tasks", () => {
  it("it should GET all tasks", (done) => {
    chai
      .request(app)
      .get("/todolist/list")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("Object");
        done();
      });
  });
});

describe("/POST task", () => {
  it("it should POST a task", (done) => {
    const task = {
      name: "Learn JS",
    };
    chai
      .request(app)
      .post("/todolist/create")
      .send(task)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("Object");
        res.body.should.have
          .property("message")
          .eql("Task created successfully");
        done();
      });
  });
  it("it should delete a task", (done) => {
    const taskID = 33;
    chai
      .request(app)
      .post("/todolist/delete")
      .send({ taskID })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a("Object");
        res.body.should.have
          .property("message")
          .eql("Task deleted successfully");
        done();
      });
  });
  it("it should update a task", (done) => {
    const taskID = 34;
    const taskIsDone = false;
    chai
      .request(app)
      .post("/todolist/update")
      .send({ taskID, taskIsDone })
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have
          .property("message")
          .eql("Task updated successfully");
        done();
      });
  });
});

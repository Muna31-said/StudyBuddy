import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSkills } from "../Features/SkillSlice";
import { Card, CardBody, Button, Row, Col, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skill.value);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);

  const getLevelColor = (level) => {
    if (level === "Beginner") return "#2ecc71";
    if (level === "Intermediate") return "#f39c12";
    if (level === "Advanced") return "#e74c3c";
    return "#999";
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div style={{ background: "#f4fffb", minHeight: "100vh" }}>
      <Container>
        {/* 🔥 Header */}
        <div style={{ padding: "40px 20px" }}>
          <h2 style={{ color: "#16a085", fontWeight: "700" }}>
            Explore Skills
          </h2>

          <p
            style={{ color: "#524f4fa6", maxWidth: "600px", fontSize: "22px" }}
          >
            Browse available skills shared by students. You can request help,
            collaborate, and learn new things from others.
          </p>

          <Button
            style={{
              background: "linear-gradient(135deg, #c6e75b, #1abc9c)",
              border: "none",
              padding: "16px 30px",
              borderRadius: "12px",
              marginTop: "30px",
              fontSize: "18px",
              fontWeight: "600",
              boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={(e) =>
              (e.target.style.background =
                "linear-gradient(135deg, #e4f77e, #16a085)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background =
                "linear-gradient(135deg, #e8e671, #1abc9c)")
            }
            onClick={() => navigate("/add")}
          >
            <span style={{ color: "#ffffff", fontWeight: "bold" }}>
              + Add Skill
            </span>
          </Button>
        </div>

        {/* 🔥 Cards */}
        <Row>
          {skills.map((item) => (
            <Col
              md="4"
              sm="6"
              xs="12"
              key={item._id}
              style={{ marginBottom: "30px" }}
            >
              <Card
                style={{
                  borderRadius: "16px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                  padding: "15px",
                  border: "none",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(0,0,0,0.08)";
                }}
              >
                <CardBody>
                  {/* Skill */}
                  <h4 style={{ fontWeight: "600", color: "#16a085" }}>
                    {item.skill}
                  </h4>

                  {/* Accent line */}
                  <div
                    style={{
                      width: "40px",
                      height: "3px",
                      backgroundColor: "#6c5ce7", // 🔥 بدل الذهبي
                      marginBottom: "10px",
                      borderRadius: "5px",
                    }}
                  ></div>

                  {/* Level */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: getLevelColor(item.level),
                        marginRight: "8px",
                      }}
                    ></div>
                    <span style={{ fontSize: "13px", color: "#555" }}>
                      {item.level}
                    </span>
                  </div>

                  {/* Info */}
                  <div style={{ fontSize: "14px", color: "#555" }}>
                    <p>
                      <b>Type:</b> {item.type}
                    </p>
                    <p>
                      <b>City:</b> {item.city}
                    </p>
                    <p>
                      <b>Date:</b> {formatDate(item.date)}
                    </p>
                  </div>

                  {/* Button */}
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "#16a085",
                      border: "none",
                      borderRadius: "8px",
                      marginTop: "10px",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#138d75")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#16a085")
                    }
                  >
                    Request
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Skills;

import { useState } from "react";

function SymptomChecker() {

  const [formData, setFormData] = useState({
    symptoms: "",
    duration: "",
    severity: "",
    age: "",
    existingConditions: "",
    currentMedicines: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("User health information:", formData);

    alert("Information submitted successfully!");
  };

  return (
    <div className="checker-page">

      <div className="checker-container">

        <h1>Tell us about your problem</h1>

        <p className="checker-description">
          Provide some information about your symptoms.
          MediGuide AI will use this information to provide
          general healthcare guidance.
        </p>

        <form onSubmit={handleSubmit}>

          {/* Symptoms */}

          <div className="form-group">
            <label>
              What problem are you experiencing?
            </label>

            <textarea
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              placeholder="Example: I have fever, cough and sore throat..."
              rows="5"
              required
            />
          </div>

          {/* Duration */}

          <div className="form-group">

            <label>
              How long have you had these symptoms?
            </label>

            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Example: 3 days"
              required
            />

          </div>

          {/* Severity */}

          <div className="form-group">

            <label>
              How severe are your symptoms?
            </label>

            <select
              name="severity"
              value={formData.severity}
              onChange={handleChange}
              required
            >
              <option value="">
                Select severity
              </option>

              <option value="mild">
                Mild
              </option>

              <option value="moderate">
                Moderate
              </option>

              <option value="severe">
                Severe
              </option>

            </select>

          </div>

          {/* Age */}

          <div className="form-group">

            <label>
              Age
            </label>

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              min="1"
              max="120"
              required
            />

          </div>

          {/* Existing conditions */}

          <div className="form-group">

            <label>
              Existing medical conditions
            </label>

            <textarea
              name="existingConditions"
              value={formData.existingConditions}
              onChange={handleChange}
              placeholder="Example: Diabetes, asthma, hypertension, or None"
              rows="3"
            />

          </div>

          {/* Current medicines */}

          <div className="form-group">

            <label>
              Current medicines
            </label>

            <textarea
              name="currentMedicines"
              value={formData.currentMedicines}
              onChange={handleChange}
              placeholder="List medicines you currently take, or write None"
              rows="3"
            />

          </div>

          <button
            type="submit"
            className="primary-btn"
          >
            Analyze My Information →
          </button>

        </form>

        <div className="medical-warning">

          <strong>Important:</strong>

          <p>
            MediGuide AI provides general healthcare information
            and does not replace professional medical diagnosis
            or treatment.
          </p>

        </div>

      </div>

    </div>
  );
}

export default SymptomChecker;
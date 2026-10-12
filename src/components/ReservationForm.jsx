import { useState } from "react";
import "./ReservationForm.css";

// Reservation form with controlled inputs, validation, and a button loading state.
// LOADING ANIMATION 5: The submit button shows a spinner and "Booking..." for
// 2 seconds after the form is submitted, and is disabled meanwhile.

function ReservationForm() {
  // Form field values
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  // Validation error messages
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
  });

  // Button loading and success states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validate all fields and return true if the form is valid
  function validateForm() {
    const newErrors = { name: "", phone: "", date: "", guests: "" };
    let isValid = true;

    // Name is required
    if (!name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    // Phone must be exactly 10 digits
    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone must be exactly 10 digits.";
      isValid = false;
    }

    // Date is required
    if (!date) {
      newErrors.date = "Please select a date.";
      isValid = false;
    }

    // Guests must be between 1 and 10
    const guestNum = parseInt(guests, 10);
    if (!guests || guestNum < 1 || guestNum > 10) {
      newErrors.guests = "Guests must be between 1 and 10.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Don't submit if already in progress
    if (isSubmitting) return;

    // Validate first
    if (!validateForm()) return;

    // Start the loading state on the button
    setIsSubmitting(true);

    // Simulate a 2-second booking process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Clear the form fields
      setName("");
      setPhone("");
      setDate("");
      setGuests("");
    }, 2000);
  }

  return (
    <section id="reservation" className="reservation">
      <div className="container">
        <h2 className="section-title">Reserve a Table</h2>
        <p className="section-subtitle">
          Book your spot and let us take care of the rest
        </p>

        {/* Show success message or the form */}
        {isSuccess ? (
          <div className="reservation__success">
            <span className="reservation__success-icon">✓</span>
            <h3>Reservation Confirmed!</h3>
            <p>We look forward to seeing you. Bon appétit!</p>
            <button
              className="reservation__reset-btn"
              onClick={() => setIsSuccess(false)}
            >
              Make Another Reservation
            </button>
          </div>
        ) : (
          <form className="reservation__form" onSubmit={handleSubmit} noValidate>
            {/* Name field */}
            <div className="reservation__field">
              <label htmlFor="res-name">Full Name</label>
              <input
                id="res-name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <span className="reservation__error">{errors.name}</span>}
            </div>

            {/* Phone field */}
            <div className="reservation__field">
              <label htmlFor="res-phone">Phone Number</label>
              <input
                id="res-phone"
                type="tel"
                placeholder="1234567890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <span className="reservation__error">{errors.phone}</span>}
            </div>

            {/* Date field */}
            <div className="reservation__field">
              <label htmlFor="res-date">Date</label>
              <input
                id="res-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              {errors.date && <span className="reservation__error">{errors.date}</span>}
            </div>

            {/* Guests field */}
            <div className="reservation__field">
              <label htmlFor="res-guests">Number of Guests</label>
              <input
                id="res-guests"
                type="number"
                min="1"
                max="10"
                placeholder="2"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
              {errors.guests && <span className="reservation__error">{errors.guests}</span>}
            </div>

            {/* Submit button with loading state */}
            <button
              type="submit"
              className="reservation__submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="reservation__btn-spinner"></span>
                  Booking...
                </>
              ) : (
                "Book a Table"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ReservationForm;

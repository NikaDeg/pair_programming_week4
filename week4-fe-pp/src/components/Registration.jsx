import { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
    });
  };
  return (
    <section
      className="section"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        className="section-center"
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '2.5rem 2rem',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow:
            '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e2e8f0',
        }}
      >
        <h2
          style={{
            marginTop: 0,
            marginBottom: '1.5rem',
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#0f172a',
            textAlign: 'center',
          }}
        >
          Registration Form
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.375rem',
            }}
          >
            <label
              htmlFor="name"
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#475569',
              }}
            >
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: '0.625rem 0.875rem',
                fontSize: '0.95rem',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                outline: 'none',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.375rem',
            }}
          >
            <label
              htmlFor="email"
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#475569',
              }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
              name="email"
              required
              style={{
                padding: '0.625rem 0.875rem',
                fontSize: '0.95rem',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                outline: 'none',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.375rem',
            }}
          >
            <label
              htmlFor="password"
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#475569',
              }}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
              style={{
                padding: '0.625rem 0.875rem',
                fontSize: '0.95rem',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                outline: 'none',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.375rem',
            }}
          >
            <label
              htmlFor="confirmPassword"
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#475569',
              }}
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
              value={formData.confirmPassword}
              required
              style={{
                padding: '0.625rem 0.875rem',
                fontSize: '0.95rem',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                outline: 'none',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.375rem',
            }}
          >
            <label
              htmlFor="phone"
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#475569',
              }}
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              required
              style={{
                padding: '0.625rem 0.875rem',
                fontSize: '0.95rem',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                outline: 'none',
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '0.75rem',
              marginTop: '0.5rem',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#ffffff',
              backgroundColor: '#2563eb',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
}
export default Registration;

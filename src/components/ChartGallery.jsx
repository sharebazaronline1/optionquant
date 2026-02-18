import React, { useState } from "react";

const testimonials = [
  { id: 1,  name: "Amit Verma",         chartImage: "img/charts/1.jpeg",   avatar: "https://randomuser.me/api/portraits/men/32.jpg"   },
  { id: 2,  name: "Sneha Kapoor",       chartImage: "img/charts/2.jpeg",   avatar: "https://randomuser.me/api/portraits/women/44.jpg"  },
  { id: 3,  name: "Rahul Sharma",       chartImage: "img/charts/3.jpeg",   avatar: "https://randomuser.me/api/portraits/men/65.jpg"   },
  { id: 4,  name: "Neha Singh",         chartImage: "img/charts/4.jpeg",   avatar: "https://randomuser.me/api/portraits/women/68.jpg"  },
  { id: 5,  name: "Karthik Reddy",      chartImage: "img/charts/5.jpeg",   avatar: "https://randomuser.me/api/portraits/men/45.jpg"   },
  { id: 6,  name: "Pooja Nair",         chartImage: "img/charts/6.jpeg",   avatar: "https://randomuser.me/api/portraits/women/44.jpg"  },
  { id: 7,  name: "Manish Gupta",       chartImage: "img/charts/7.jpeg",   avatar: "https://randomuser.me/api/portraits/men/32.jpg"   },
  { id: 8,  name: "Priya Menon",        chartImage: "img/charts/8.jpeg",   avatar: "https://randomuser.me/api/portraits/women/68.jpg"  },
  { id: 9,  name: "Vikram Joshi",       chartImage: "img/charts/9.jpeg",   avatar: "https://randomuser.me/api/portraits/men/65.jpg"   },
  { id: 10, name: "Anjali Desai",       chartImage: "img/charts/10.jpeg",  avatar: "https://randomuser.me/api/portraits/women/44.jpg"  },
  { id: 11, name: "Rohan Patel",        chartImage: "img/charts/11.jpeg",  avatar: "https://randomuser.me/api/portraits/men/45.jpg"   },
  { id: 12, name: "Sanjay Iyer",        chartImage: "img/charts/12.jpeg",  avatar: "https://randomuser.me/api/portraits/men/32.jpg"   },
  { id: 13, name: "Divya Malhotra",     chartImage: "img/charts/13.jpeg",  avatar: "https://randomuser.me/api/portraits/women/68.jpg"  },
  { id: 14, name: "Arjun Khanna",       chartImage: "img/charts/14.jpeg",  avatar: "https://randomuser.me/api/portraits/men/65.jpg"   },
  { id: 15, name: "Shreya Bose",        chartImage: "img/charts/15.jpeg",  avatar: "https://randomuser.me/api/portraits/women/44.jpg"  },
  { id: 16, name: "Nikhil Yadav",       chartImage: "img/charts/16.jpeg",  avatar: "https://randomuser.me/api/portraits/men/45.jpg"   },
  { id: 17, name: "Meera Pillai",       chartImage: "img/charts/17.jpeg",  avatar: "https://randomuser.me/api/portraits/women/68.jpg"  },
  { id: 18, name: "Siddharth Rao",      chartImage: "img/charts/18.jpeg",  avatar: "https://randomuser.me/api/portraits/men/32.jpg"   },
  { id: 19, name: "Tanya Mehra",        chartImage: "img/charts/19.jpeg",  avatar: "https://randomuser.me/api/portraits/women/44.jpg"  },
  { id: 20, name: "Aditya Chauhan",     chartImage: "img/charts/20.jpeg",  avatar: "https://randomuser.me/api/portraits/men/65.jpg"   },
  { id: 21, name: "Riya Malhotra",      chartImage: "img/charts/21.jpeg",  avatar: "https://randomuser.me/api/portraits/women/68.jpg"  },
  { id: 22, name: "Varun Kapoor",       chartImage: "img/charts/22.jpeg",  avatar: "https://randomuser.me/api/portraits/men/45.jpg"   },
  { id: 23, name: "Kavya Iyer",         chartImage: "img/charts/23.jpeg",  avatar: "https://randomuser.me/api/portraits/women/44.jpg"  },
  { id: 24, name: "Deepak Nair",        chartImage: "img/charts/24.jpeg",  avatar: "https://randomuser.me/api/portraits/men/32.jpg"   },
  { id: 25, name: "Ishita Roy",         chartImage: "img/charts/25.jpeg",  avatar: "https://randomuser.me/api/portraits/women/68.jpg"  },
  { id: 26, name: "Yash Thakur",        chartImage: "img/charts/26.jpeg",  avatar: "https://randomuser.me/api/portraits/men/65.jpg"   },
  { id: 27, name: "Aarohi Saxena",      chartImage: "img/charts/27.jpeg",  avatar: "https://randomuser.me/api/portraits/women/44.jpg"  },
  { id: 28, name: "Devansh Mehra",      chartImage: "img/charts/28.jpeg",  avatar: "https://randomuser.me/api/portraits/men/45.jpg"   },
  { id: 29, name: "Saumya Trivedi",     chartImage: "img/charts/29.jpeg",  avatar: "https://randomuser.me/api/portraits/women/68.jpg"  },
  { id: 30, name: "Harsh Vardhan",      chartImage: "img/charts/30.jpeg",  avatar: "https://randomuser.me/api/portraits/men/32.jpg"   },
  { id: 31, name: "Myra Kapoor",        chartImage: "img/charts/31.jpeg",  avatar: "https://randomuser.me/api/portraits/women/44.jpg"  },
  { id: 32, name: "Aryan Dubey",        chartImage: "img/charts/32.jpeg",  avatar: "https://randomuser.me/api/portraits/men/65.jpg"   },
  { id: 33, name: "Kiara Bose",         chartImage: "img/charts/33.jpeg",  avatar: "https://randomuser.me/api/portraits/women/68.jpg"  },
  { id: 34, name: "Reyansh Jain",       chartImage: "img/charts/34.jpeg",  avatar: "https://randomuser.me/api/portraits/men/45.jpg"   },
  { id: 35, name: "Zara Khan",          chartImage: "img/charts/35.jpeg",  avatar: "https://randomuser.me/api/portraits/women/44.jpg"  },
  { id: 36, name: "Vihaan Malhotra",    chartImage: "img/charts/36.jpeg",  avatar: "https://randomuser.me/api/portraits/men/32.jpg"   },
  { id: 37, name: "Aadhya Reddy",       chartImage: "img/charts/37.jpeg",  avatar: "https://randomuser.me/api/portraits/women/68.jpg"  },
  { id: 38, name: "Kabir Singh",        chartImage: "img/charts/38.jpeg",  avatar: "https://randomuser.me/api/portraits/men/65.jpg"   },
  { id: 39, name: "Navya Trivedi",      chartImage: "img/charts/39.jpeg",  avatar: "https://randomuser.me/api/portraits/women/44.jpg"  },
  { id: 40, name: "Advik Sharma",       chartImage: "img/charts/40.jpeg",  avatar: "https://randomuser.me/api/portraits/men/45.jpg"   },
  { id: 41, name: "Ira Pillai",         chartImage: "img/charts/41.jpeg",  avatar: "https://randomuser.me/api/portraits/women/68.jpg"  },
  { id: 42, name: "Reyansh Joshi",      chartImage: "img/charts/42.jpeg",  avatar: "https://randomuser.me/api/portraits/men/32.jpg"   },
  { id: 43, name: "Avni Desai",         chartImage: "img/charts/43.jpeg",  avatar: "https://randomuser.me/api/portraits/women/44.jpg"  },
  { id: 44, name: "Shaurya Yadav",      chartImage: "img/charts/44.jpeg",  avatar: "https://randomuser.me/api/portraits/men/65.jpg"   },
  { id: 45, name: "Diya Mehra",         chartImage: "img/charts/45.jpeg",  avatar: "https://randomuser.me/api/portraits/women/68.jpg"  },
  { id: 46, name: "Atharv Chauhan",     chartImage: "img/charts/46.jpeg",  avatar: "https://randomuser.me/api/portraits/men/45.jpg"   },
  { id: 47, name: "Mira Khurana",       chartImage: "img/charts/47.jpeg",  avatar: "https://randomuser.me/api/portraits/women/44.jpg"  },
  { id: 48, name: "Veer Malhotra",      chartImage: "img/charts/48.jpeg",  avatar: "https://randomuser.me/api/portraits/men/32.jpg"   },
  { id: 49, name: "Saanvi Bose",        chartImage: "img/charts/49.jpeg",  avatar: "https://randomuser.me/api/portraits/women/68.jpg"  },
  { id: 50, name: "Rudra Thakur",       chartImage: "img/charts/50.jpeg",  avatar: "https://randomuser.me/api/portraits/men/65.jpg"   },
];
export const ChartGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="oq-testimonials">
      <header className="oq-header">
        <span className="highlight">REAL RESULTS</span>
        <h2>Trusted by Serious Traders</h2>
        <p>Real results from real market participants</p>
      </header>

      <div className="oq-grid">
        {testimonials.map((t) => (
          <div key={t.id} className="oq-card">
            <div 
              className="oq-chart" 
              onClick={() => openModal(t.chartImage)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openModal(t.chartImage)}
            >
              <img src={t.chartImage} alt={`Trade setup by ${t.name}`} loading="lazy" />
            </div>
            <div className="oq-name-wrapper">
              <img src="/img/avatar.png" alt={t.name} className="avatar-icon" loading="lazy" />
              <div className="oq-name">{t.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-screen Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged chart" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
};
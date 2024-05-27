import React, {useEffect, useRef, useState} from 'react'

export default function UniversityCarousel() {
    const carouselRef = useRef(null);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const carousel = carouselRef.current;
      const slides = carousel ? carousel.querySelectorAll('.slide') : [];
      const prevButton = prevButtonRef.current;
      const nextButton = nextButtonRef.current;
  
      if (!carousel || slides.length === 0 || !prevButton || !nextButton) {
        return;
      }
  
      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.style.transform = `translateX(${(i - index) * 100}%)`;
          slide.style.opacity = i === index ? '1' : '0';
          slide.classList.toggle('active', i === index);
        });
      }
  
      function nextSlide() {
        setCurrentIndex(prevIndex => {
          const newIndex = prevIndex + 1 >= slides.length ? 0 : prevIndex + 1;
          showSlide(newIndex);
          return newIndex;
        });
      }
  
      function prevSlide() {
        setCurrentIndex(prevIndex => {
          const newIndex = prevIndex - 1 < 0 ? slides.length - 1 : prevIndex - 1;
          showSlide(newIndex);
          return newIndex;
        });
      }
  
      prevButton.addEventListener('click', prevSlide);
      nextButton.addEventListener('click', nextSlide);
  
      showSlide(currentIndex);
  
      // Clean up event listeners on component unmount
      return () => {
        prevButton.removeEventListener('click', prevSlide);
        nextButton.removeEventListener('click', nextSlide);
      };
    }, [currentIndex]);

  return (
    <div>
    <div className="container-university">
        <h1 className="university-heading">Popular student choices</h1>
        <div className="horizontal-line"></div>
        <div className="carousel" ref={carouselRef}>
            <div className="slide active">
                <div className="uni-information-container">
                    <div className="basic-inf-uni-section uni-wrap-content">
                        <h1>KIMEP University</h1>
                        <p>
                            Category: <span style={{color: 'red'}}>Marketing & Communication</span><br></br>
                            Location: <span style={{color: 'red'}}>Almaty, Kazakhstan</span>
                        </p>
                    </div>
                    <div className="basic-uni-desc-section uni-wrap-content">
                        <p>
                            KIMEP University, founded in 1992 in Almaty, Kazakhstan, is a renowned private institution offering top-tier education in business, 
                            economics, and social sciences. Accredited nationally and internationally, KIMEP provides undergraduate, graduate, and doctoral programs 
                            taught by a diverse faculty. Known for its commitment to excellence and global outlook, KIMEP prepares students for successful careers 
                            through innovative programs and modern facilities.
                        </p>
                    </div>
                    <div className="basic-uni-apply-section uni-wrap-content">
                        <button>Apply</button>
                        <p>Requirements:</p>
                        <ul>
                            <li>
                                High School Diploma
                            </li>
                            <li>
                                Official transcripts of academic reports;
                            </li>
                            <li>
                                Standardized test scores (if applicable);                            
                            </li>
                            <li>
                                A personal statement or essay outlining academic and career goals;                            
                            </li>
                            <li>
                                Proof of English language proficiency (if English is not the applicant's native language);                            
                            </li>
                            <li>
                                Any additional requirements provided for by the selected training program.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                
            <div className="slide">
                <div className="uni-information-container">
                    <div className="basic-inf-uni-section uni-wrap-content">
                        <h1>Maqsut Narikbayev University (ex. KazGUU)</h1>
                        <p>
                            Category: <span style={{color: 'red'}}>International School of Economics</span><br></br>
                            Location: <span style={{color: 'red'}}>Astana, Kazakhstan</span>
                        </p>
                    </div>
                    <div className="basic-uni-desc-section uni-wrap-content">
                        <p>
                            Experience excellence at Maqsut Narikbayev University!
                             University offers top-notch education, a robust network,
                              and a dynamic campus environment. With cutting-edge facilities
                               and a supportive community, your journey to success begins here.
                                Join and thrive academically and socially!
                        </p>
                    </div>
                    <div className="basic-uni-apply-section uni-wrap-content">
                        <button>Apply</button>
                        <p>Requirements:</p>
                        <ul>
                            <li>
                                High School Diploma
                            </li>
                            <li>
                                Official transcripts of academic reports;
                            </li>
                            <li>
                                Standardized test scores (if applicable);                            
                            </li>
                            <li>
                                A personal statement or essay outlining academic and career goals;                            
                            </li>
                            <li>
                                Proof of English language proficiency (if English is not the applicant's native language);                            
                            </li>
                            <li>
                                Any additional requirements provided for by the selected training program.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="slide">
                <div className="uni-information-container">
                    <div className="basic-inf-uni-section uni-wrap-content">
                        <h1>Atyrau Oil and Gas university</h1>
                        <p>
                            Category: <span style={{color: 'red'}}>Oil and gas faculty</span><br></br>
                            Location: <span style={{color: 'red'}}>Atyrau, Kazakhstan</span>
                        </p>
                    </div>
                    <div className="basic-uni-desc-section uni-wrap-content">
                        <p>
                            Discover Atyrau Oil and Gas University, your premier destination for excellence 
                            in energy education. Located at the heart of Kazakhstan's oil-rich region, it 
                            offers cutting-edge programs, expert faculty, and unparalleled industry connections. 
                            Join us and embark on a rewarding career journey in the dynamic field of energy.
                        </p>
                    </div>
                    <div className="basic-uni-apply-section uni-wrap-content">
                        <button>Apply</button>
                        <p>Requirements:</p>
                        <ul>
                            <li>
                                High School Diploma
                            </li>
                            <li>
                                Official transcripts of academic reports;
                            </li>
                            <li>
                                Standardized test scores (if applicable);                            
                            </li>
                            <li>
                                A personal statement or essay outlining academic and career goals;                            
                            </li>
                            <li>
                                Proof of English language proficiency (if English is not the applicant's native language);                            
                            </li>
                            <li>
                                Any additional requirements provided for by the selected training program.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="carousel-btn">
            <button className="prev-button active" ref={prevButtonRef}></button>
            <button className="next-button" ref={nextButtonRef}></button>
        </div>
    </div>
    </div>
  )
}


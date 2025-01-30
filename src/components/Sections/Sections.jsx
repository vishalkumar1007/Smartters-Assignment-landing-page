import "./Sections.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Sections = () => {
  const navigate = useNavigate();
  const[activeSection, setActiveSection] = useState("section_1");


  const sectionAction = (action)=>{
    localStorage.setItem('section', action);
    switch(action){
      case 'section_1':
        navigate('/');
        break;
      case 'section_2':
        navigate('/NewAndTrending');
        break;
      case 'section_3':
        navigate('/AllCategories');
        break;
      case 'section_4':
        navigate('/MyOrder');
        break;
      case 'section_5':
        navigate('/AboutUs');
        break;
      case 'section_6':
        navigate('/CustomerSupport');
        break;
      default:
        navigate('/');
        break;
    }

  }

  useEffect(()=>{
    setActiveSection(localStorage.getItem('section') || 'section_1');
  },[])

  return (
    <div className="Sections_main">
      <div className="Sections_main_arrange_width">
        <div className="Sections_main_arrange_width_scroll">
          <button  id={activeSection==='section_1'?'section_active_prev':'section_inactive_prev'} onClick={()=>{sectionAction('section_1')}}>HOME</button>
          <button  id={activeSection==='section_2'?'section_active_prev':'section_inactive_prev'} onClick={()=>{sectionAction('section_2')}}>NEW & TRENDING</button>
          <button  id={activeSection==='section_3'?'section_active_prev':'section_inactive_prev'} onClick={()=>{sectionAction('section_3')}}>ALL CATEGORIES</button>
          <button  id={activeSection==='section_4'?'section_active_prev':'section_inactive_prev'} onClick={()=>{sectionAction('section_4')}}>MY ORDER</button>
          <button  id={activeSection==='section_5'?'section_active_prev':'section_inactive_prev'} onClick={()=>{sectionAction('section_5')}}>ABOUT US</button>
          <button  id={activeSection==='section_6'?'section_active_prev':'section_inactive_prev'} onClick={()=>{sectionAction('section_6')}}>CUSTOMER SUPPORT</button>
        </div>
      </div>
    </div>
  );
};

export default Sections;

import { useHistory } from "react-router";
import $ from 'jquery';

const Navbar = () => {
    // $(function () {
    //     $(document).scroll(function () {
    //       var $nav = $(".upper-navbar");
    //       $nav.css('background-color', '#555b6e46');
    //     });
    //   });

   
    // When the user clicks on the button, scroll to the top of the document   
     function topFunction() {
    document.body.scrollTop = 0;    document.documentElement.scrollTop = 0;        }
            
  return (
    <>
      <div class="upper-navbar">
        <a href="http://localhost:3000/MainPage" class="active">
          Home
        </a>
        <a href="http://localhost:3000/MainSearch/SearchByName">
          Search By Name
        </a>
        <a href="http://localhost:3000/MainSearch/SearchBySpecialties">
          Search By Specialties
        </a>
        <a href="http://localhost:3000/MainSearch/addNewDoctor">
          Add new Doctor Record
        </a>
      </div>
    </>
  );
  
};
export default Navbar;

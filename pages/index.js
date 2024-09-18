import React from "react";
import Link from "next/link";
import Styles from "@/styles/Homepage.module.css";
function HomePage() {
  return (
    <div className={Styles.container}>
      <h1>Vector UI Components</h1>
      <div className={Styles.linkContainer}>
        <Link href="/Accordion">
          <span>Accordion</span>
        </Link>
        <br />
        <Link href="/Table">
          <span>Tables</span>
        </Link>
        <br />
        <Link href="/Card">
          <span>Cards</span>
        </Link>
        <br />
        <Link href="/Button">
          <span>Button</span>
        </Link>
        <br />
        <Link href="#">
          <span>Rating</span>
        </Link>
        <br />
        <Link href="Alerts">
          <span>Alerts</span>
        </Link>
        <br />
        <Link href="#">
          <span>Forms</span>
        </Link>
        <br />
        <Link href="#">
          <span>Lists</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Charts</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Toast</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Tiles</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Stats/Charts</span>
        </Link>
        <br />
        <Link href="/Carousel">
          <span>Carousel/Slider</span>
        </Link>
        <br />
        <Link href="/#">
          <span>ToolsTips</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Maps</span>
        </Link>
        <br />
        <Link href="/Spinner">
          <span>Spinner</span>
        </Link>
        <br />
        <Link href="/Pagination">
          <span>Pagination</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Notifications</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Social Sharing</span>
        </Link>
        <br />
        <Link href="/ProgressBar">
          <span>Progress Bars</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Steppers</span>
        </Link>
        <br />
        <Link href="/BreadCrumbs">
          <span>Breadcrumbs</span>
        </Link>
        <br />
        <Link href="/Timepicker">
          <span>Time Picker</span>
        </Link>
        <br />
        <Link href="/Datepicker">
          <span>Date Picker</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Video Player</span>
        </Link>
        <br />
        <Link href="/Calender">
          <span>Calender</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Modal</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Tabs</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Dialog boxes</span>
        </Link>
        <br />
        <Link href="/RegistrationForm">
          <span>Login/Registration Forms</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Search Bars</span>
        </Link>
        <br />
        <Link href="/FileUpload">
          <span>File Upload</span>
        </Link>
        <br />
        <Link href="/ImageGallery">
          <span>Image Gallery</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Form Wizards</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Data Table</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Tags</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Filters</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Icons</span>
        </Link>
        <br />
        <Link href="/Toggles">
          <span>Toggles</span>
        </Link>
        <br />
        <Link href="/#">
          <span>Feeds</span>
        </Link>
        <br />
        <Link href="/NavBar">
          <span>NavBar</span>
        </Link>
      </div>
    </div>
  );
}
export default HomePage;

<template>
 
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>Bootstrap Slider</h3>
      </div>
      <ul class="lisst-unstyled components">
        <p>The Providers</p>
       
        <li>
           <router-link to='/admin/users'>Users</router-link> 
        </li>

        <li>
           <router-link to='/admin/charges'>Charges</router-link> 
        </li>

        <li>
           <router-link to='/admin/devices'>Devices</router-link> 
        </li>

        <li>
           <router-link to='/admin/operations'>Operations</router-link> 
        </li>

        <li>
           <router-link to='/admin/credit'>Credit</router-link> 
        </li>
      </ul>
    </nav>
 
</template>

<script></script>

<style>

a,
a:hover,
a:focus{
	color:#fff;
	text-decoration: none;
	transition: all 0.3s;
}
.router-link-active{
	color:#fff;
	border-color: blue;
  background-color: burlywood;
	
}
#sidebar.active {
  margin-left: -250px;
}


#sidebar {
  min-width: 250px;
  max-width: 250px;
  background: #7386d5;
  color: #fff;
  transition: all 0.3s;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
}
#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}

#sidebar ul li a:hover {
  color: #7386d5;
  background: #fff;
}
#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20%;
  transform: translateY(-50%);
}
ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}

#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #sidebarCollapse span {
    display: none;
  }
}
</style>

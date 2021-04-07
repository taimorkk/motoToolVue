<template>
 
    <nav id="sidebar">
      
      <ul class="lisst-unstyled components">
        
       
        <li class="">
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
        <li>
           <router-link to='/admin/configuration'>Configuration</router-link> 
        </li>
      </ul>
    </nav>
 
</template>

<script></script>

<style scoped>

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
  background-color: #EDEDED;
	
}

#sidebar.active {
  margin-left: -250px;
}


#sidebar {
  min-width: 250px;
  max-width: 250px;
  min-height: 600px;
  background: #4a4d4e;
  color: #fff;
  transition: all 0.3s;
}


#sidebar ul.components {
  padding: 20px 0;
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
  color: #ffffff;
  background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f); 
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

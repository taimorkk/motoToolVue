<template>
 
    <nav id="sidebar" class="sidebar" >
      
      <ul class="lisst-unstyled my-5  components">
        
       
        <li>
           <router-link to='/userview/operations'>Operations History</router-link> 
        </li>

        <li>
           <router-link to='/userview/charges'> Charges History</router-link> 
        </li>

       
      </ul>
    </nav>
  
</template>

<script></script>

<style scoped>


.router-link-active{
  background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
  background-size: 200%;
  font-size: 1.2rem;
  color: #fff;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: 0.5s;
	
}
.router-link-active:hover {
  background-position: right;
}
#sidebar.active {
  margin-left: -250px;
}


.sidebar {
  min-width: 250px;
  max-width: 250px;
  min-height: 600px;
  background-color: #505352;
  background-size: 200%; 
  
 cursor: pointer;
  transition: 0.5s;
}


#sidebar ul.components {
  padding: 20px 0;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}
#sidebar>ul>li>a {
      padding: 20px 10px;
}
.sidebar ul li a {
  color: #fff;
  text-decoration: none;
  padding: 10px;
  font-size: 1.1em;
  display: block;
      border-bottom: 1px solid rgba(145, 147, 150, 0.19);
         
}

#sidebar ul li a:hover {
  color: black;
  background-image: linear-gradient(to right, #919e9a, #aebeb9, #c2ceca); 
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

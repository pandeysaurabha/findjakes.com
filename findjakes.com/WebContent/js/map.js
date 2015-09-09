var locations = [
      ['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Adarsh Nagar Matro Station','New Delhi','Delhi',28.71642,77.17046 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 2 & 3 AIIMS Matro Station','New Delhi','Delhi',28.56892,77.20771 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 2 Akshardham Matro Station','New Delhi','Delhi',28.61806,77.27869 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Anand Vihar Matro Station','New Delhi','Delhi',28.64695,77.31603 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 Arjan Garh Matro Station','New Delhi','Delhi',28.48076,77.12583 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Ashok Park Main Matro Station','New Delhi','Delhi',28.67153,77.15527 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Azadpur Matro Station','New Delhi','Delhi',28.70696,77.18053 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 Badarpur Matro Station','New Delhi','Delhi',28.49334,77.30307 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 & 2 & 5 Barakhambha Road Matro Station','New Delhi','Delhi',28.63003,77.22436 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Botanical Garden Matro Station','Noida','UP',28.56409,77.3342 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 & 3 & 5 Central Secretariat Matro Station','New Delhi','Delhi',28.61474,77.21191 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 2 & 3 & 4 Chandni Chowk Matro Station','New Delhi','Delhi',28.65785,77.23014 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 2 Chhatarpur Matro Station','New Delhi','Delhi',28.50671,77.17484 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 2 & 3 Chawri Bazar Matro Station','New Delhi','Delhi',28.64931,77.22637 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Civil Lines Matro Station','New Delhi','Delhi',28.67726,77.2241 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Delhi Aerocity Matro Station','New Delhi','Delhi',28.54881,77.12092 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Dhaula Kuan Matro Station','New Delhi','Delhi',28.59178,77.16155 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Dilshad Garden Matro Station','New Delhi','Delhi',28.67592,77.32142 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Dwarka Matro Station','New Delhi','Delhi',28.61564,77.02197 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Dwarka Morh Matro Station','New Delhi','Delhi',28.61932,77.03326 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Dwarka Sector 10 Matro Station','New Delhi','Delhi',28.58068,77.05682 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Dwarka Sector 11 Matro Station','New Delhi','Delhi',28.58657,77.04929 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Dwarka Sector 12 Matro Station','New Delhi','Delhi',28.59232,77.04051 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Dwarka Sector 13 Matro Station','New Delhi','Delhi',28.59722,77.03326 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Dwarka Sector 14 Matro Station','New Delhi','Delhi',28.60223,77.02588 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Dwarka Sector 21 Matro Station','New Delhi','Delhi',28.55226,77.05828 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Dwarka Sector 8 Matro Station','New Delhi','Delhi',28.56583,77.06706 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Dwarka Sector 9 Matro Station','New Delhi','Delhi',28.57487,77.06454 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 Ghitorni Matro Station','New Delhi','Delhi',28.49383,77.14922 ],
['Civic Amenity Complex','Public Washrooms','Gate No. 2 or 3 Govind Puri Matro Station','New Delhi','Delhi',28.54451,77.26401 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 2 & 3 Green Park Matro Station','New Delhi','Delhi',28.55979,77.20682 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 & 4 & 5 GTB Nagar Matro Station','New Delhi','Delhi',28.69785,77.20722 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Guru Dronacharya Matro Station','Gurgaon','Hariyana',28.48203,77.10232 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 2 & 3 Hauz Khas Matro Station','New Delhi','Delhi',28.54335,77.20667 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 HUDA City Centre Matro Station','Gurgaon','Hariyana',28.45927,77.07268 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 IFFCO Chowk Matro Station','Gurgaon','Hariyana',28.47209,77.07175 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 & 2 INA Matro Station','New Delhi','Delhi',28.57526,77.20935 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Inderlok Matro Station','New Delhi','Delhi',28.67319,77.16994 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Indira Gandhi International Airport Matro Station','New Delhi','Delhi',28.55693,77.08669 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 Indraprastha Matro Station','New Delhi','Delhi',28.62051,77.24993 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 Jahangirpuri Matro Station','New Delhi','Delhi',28.72592,77.16267 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Janakpuri East Matro Station','New Delhi','Delhi',28.63305,77.08669 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Janakpuri West Matro Station','New Delhi','Delhi',28.62943,77.07767 ],
['Civic Amenity Complex','Public Washrooms','Gate No. 2 or 3 Jangpura Matro Station','New Delhi','Delhi',28.5843,77.23766 ],
['Civic Amenity Complex','Public Washrooms','Gate No. 2 Jasola Apollo Matro Station','New Delhi','Delhi',28.53824,77.28319 ],
['Civic Amenity Complex','Public Washrooms','Gate No. 1 or 4 Jawaharlal Nehru Stadium Matro Station','New Delhi','Delhi',28.5904,77.23326 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Jhandewalan Matro Station','New Delhi','Delhi',28.64427,77.19988 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Jhilmil Matro Station','New Delhi','Delhi',28.67579,77.31239 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 2 & 4 Jor Bagh Matro Station','New Delhi','Delhi',28.58708,77.21209 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 2 Kailash Colony Matro Station','New Delhi','Delhi',28.55527,77.24205 ],
['Civic Amenity Complex','Public Washrooms','Gate No. 2 Kalkaji Mandir Matro Station','New Delhi','Delhi',28.55007,77.25835 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Kanhiya Nagar Matro Station','New Delhi','Delhi',28.68254,77.16459 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Karkarduma Matro Station','New Delhi','Delhi',28.64849,77.30558 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Karol Bagh Matro Station','New Delhi','Delhi',28.644,77.18855 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 2 Kashmere Gate Matro Station','New Delhi','Delhi',28.6675,77.22817 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Kaushambi Matro Station','Ghaziabad','UP',28.64544,77.32432 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Keshav Puram Matro Station','New Delhi','Delhi',28.68894,77.1616 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 4 Khan Market Matro Station','New Delhi','Delhi',28.60276,77.22829 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Kirti Nagar Matro Station','New Delhi','Delhi',28.65575,77.15057 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Kohat Enclave Matro Station','New Delhi','Delhi',28.6981,77.14024 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 Lajpat Nagar Matro Station','New Delhi','Delhi',28.57079,77.23653 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Laxmi Nagar Matro Station','New Delhi','Delhi',28.63064,77.27749 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Madipur Matro Station','New Delhi','Delhi',28.67734,77.11965 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 3 & 4 Malviya Nagar Matro Station','New Delhi','Delhi',28.52798,77.20565 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 3 & 4 Mandi House Matro Station','New Delhi','Delhi',28.62588,77.2341 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Mansarovar Park Matro Station','New Delhi','Delhi',28.67544,77.30095 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Mayur Vihar -I Matro Station','New Delhi','Delhi',28.60442,77.28925 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Mayur Vihar Extension Matro Station','New Delhi','Delhi',28.59428,77.29455 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 MG Road Matro Station','Gurgaon','Hariyana',28.47957,77.08006 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 Model Town Matro Station','New Delhi','Delhi',28.70278,77.19363 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 Mohan Estate Matro Station','New Delhi','Delhi',28.51938,77.29388 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 Moolchand Matro Station','New Delhi','Delhi',28.56417,77.23423 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Moti Nagar Matro Station','New Delhi','Delhi',28.65784,77.14248 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Mundka Matro Station','New Delhi','Delhi',28.68321,77.03133 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Nangloi Matro Station','New Delhi','Delhi',28.68231,77.06471 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Nangloi Railway station Matro Station','New Delhi','Delhi',28.68208,77.05596 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Nawada Matro Station','New Delhi','Delhi',28.62025,77.04514 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 Nehru Place Matro Station','New Delhi','Delhi',28.55148,77.25154 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Netaji Subhash Place Matro Station','New Delhi','Delhi',28.69591,77.15226 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 New Ashok Nagar Matro Station','New Delhi','Delhi',28.58916,77.30204 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 & 2 New Delhi Matro Station','New Delhi','Delhi',28.64307,77.22144 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Nirman Vihar Matro Station','New Delhi','Delhi',28.63663,77.28683 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Noida City Centre Matro Station','Noida','UP',28.57466,77.35608 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Noida Golf Course Matro Station','Noida','UP',28.56714,77.34598 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Noida Sector 15 Matro Station','Noida','UP',28.58512,77.31139 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Noida Sector 16 Matro Station','Noida','UP',28.57819,77.31757 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Noida Sector 18 Matro Station','Noida','UP',28.57081,77.32612 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 3 Okhla Matro Station','New Delhi','Delhi',28.54292,77.27504 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Paschim Vihar East Matro Station','New Delhi','Delhi',28.6773,77.11228 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Paschim Vihar West Matro Station','New Delhi','Delhi',28.67855,77.10227 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 & 2 Patel Chowk Matro Station','New Delhi','Delhi',28.62295,77.21389 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Patel Nagar Matro Station','New Delhi','Delhi',28.64498,77.16929 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Peera Garhi Matro Station','New Delhi','Delhi',28.67959,77.09261 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Pitam Pura Matro Station','New Delhi','Delhi',28.70317,77.13223 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 2 Pragati Maidan Matro Station','New Delhi','Delhi',28.62342,77.2425 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Pratap Nagar Matro Station','New Delhi','Delhi',28.66662,77.19882 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Preet Vihar Matro Station','New Delhi','Delhi',28.64171,77.29543 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Pul Bangash Matro Station','New Delhi','Delhi',28.66636,77.20727 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Punjabi Bagh East Matro Station','New Delhi','Delhi',28.67289,77.14614 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 Qutab Minar Matro Station','New Delhi','Delhi',28.51302,77.18648 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 2 Race Course Matro Station','New Delhi','Delhi',28.59726,77.21088 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Rajdhani Park Matro Station','New Delhi','Delhi',28.68221,77.04381 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Rajendra Place Matro Station','New Delhi','Delhi',28.6425,77.17815 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 3 & 4 & 9 Rajiv Chowk Matro Station','New Delhi','Delhi',28.63282,77.21826 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Rajouri Garden Matro Station','New Delhi','Delhi',28.64902,77.1227 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Ramakrishna Ashram Marg Matro Station','New Delhi','Delhi',28.63923,77.2084 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Ramesh Nagar Matro Station','New Delhi','Delhi',28.65274,77.13164 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Rithala Matro Station','New Delhi','Delhi',28.72072,77.10713 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Rohini East Matro Station','New Delhi','Delhi',28.7076,77.12591 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Rohini West Matro Station','New Delhi','Delhi',28.71483,77.11467 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 2 Saket Matro Station','New Delhi','Delhi',28.5206,77.20138 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Sarita Vihar Matro Station','New Delhi','Delhi',28.52878,77.28826 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Satguru Ramsingh Marg Matro Station','New Delhi','Delhi',28.66199,77.15748 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Seelampur Matro Station','New Delhi','Delhi',28.66989,77.26678 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Shadipur Matro Station','New Delhi','Delhi',28.6516,77.15824 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Shahdara Matro Station','New Delhi','Delhi',28.67345,77.28962 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Shastri Nagar Matro Station','New Delhi','Delhi',28.66999,77.18169 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Shastri Park Matro Station','New Delhi','Delhi',28.668,77.24994 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Shivaji Park Matro Station','New Delhi','Delhi',28.6749,77.13056 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Shivaji Stadium Matro Station','New Delhi','Delhi',28.62901,77.2119 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Sikandarpur Matro Station','New Delhi','Delhi',28.48182,77.09235 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Subhash Nagar Matro Station','New Delhi','Delhi',28.64039,77.10495 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 Sultanpur Matro Station','New Delhi','Delhi',28.49927,77.16153 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Surajmal Stadium Matro Station','New Delhi','Delhi',28.6818,77.07385 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Tagore Garden Matro Station','New Delhi','Delhi',28.64379,77.11284 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Tilak Nagar Matro Station','New Delhi','Delhi',28.63657,77.09648 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Tis Hazari Matro Station','New Delhi','Delhi',28.66711,77.21653 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 Tughlakabad Matro Station','New Delhi','Delhi',28.50254,77.2993 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 & 2 & 3 Udyog Bhawan Matro Station','New Delhi','Delhi',28.61166,77.21198 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Udyog Nagar Matro Station','New Delhi','Delhi',28.6809,77.08077 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Uttam Nagar East Matro Station','New Delhi','Delhi',28.62481,77.0653 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Uttam Nagar West Matro Station','New Delhi','Delhi',28.62177,77.05585 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Vaishali Matro Station','New Delhi','Delhi',28.64997,77.33974 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Vidhan Sabha Matro Station','New Delhi','Delhi',28.68802,77.2214 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 3 & 4 Vishwa Vidyalaya Matro Station','New Delhi','Delhi',28.6948,77.21483 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 or 2 Welcome Matro Station','New Delhi','Delhi',28.6718,77.27756 ],
['Sulabh Shauchalaya','Public Washrooms','Gate No. 1 Yamuna Bank Matro Station','New Delhi','Delhi',28.62331,77.26792 ],
['Sulabh Shauchalaya','Public Washrooms','Sulabh Village Palam Dabri Marg Mahavir Enclave Palam','New Delhi','Delhi',28.5971453,77.0807219 ],
['V3S Mall','Public Washrooms','Ground Floor V3S Mall Near Nirman Vihar Metro Station','New Delhi','Delhi',28.6373679,77.2865075 ],
['Sulabh Shauchalaya','Public Washrooms','Sanjay Setu Bridge Rajwada','Indore','Madhya Pradesh',22.7182173,75.85940289 ],
['Sulabh Shauchalaya','Public Washrooms','Sarvate Bus Stand Near Gurukripa Hotel','Indore','Madhya Pradesh',22.7137805,75.8686118 ],
['Sulabh Shauchalaya','Public Washrooms','Dawa Bazar Near MY Hospital Rickstand AB Road','Indore','Madhya Pradesh',22.7195687,75.8577258 ],
['Public Toilet','Public Washrooms','Municipal Market Outer Connaught Circle Connaught Place','New Delhi','Delhi',28.640629,77.225529 ],
['NDMC Public Toilet','Public Washrooms','Defence Colony','New Delhi','Delhi', 28.5764559,77.2384007 ],
['Public Toilet','Public Washrooms','Amar Colony Market Lajpat Nagar IV','New Delhi','Delhi', 28.5629178,77.2442297 ],
['Sulabh Shauchalaya','Public Washrooms','15 Ashok Marg Kanchanjunga Market Sector 53','Noida','Uttar Pradesh',28.595804,77.362233 ],
['Sulabh Shauchalaya','Public Washrooms','Near Bus stand','Khandwa','Madhya Pradesh',21.8221102,76.3528921],
['Sulabh Shauchalaya','Public Washrooms','Baghambari Road  Allahapur','Allahabad','Uttar Pradesh', 25.446624,81.875897],
['Sulabh Shauchalaya','Public Washrooms','Off NH 24 Industrial Area Vijay Nagar','Ghaziabad','Uttar Pradesh',28.6441775,77.4381872],
['Public Toilet','Public Washrooms','Infront of Police Chowki Allahapur','Allahabad','Uttar Pradesh',25.446624,81.875897],
['Sulabh Shauchalaya','Public Washrooms','10 No. Market Arera Colony','Bhopal','Madhya Pradesh',23.214347,77.436256],
['Public Toilet','Public Washrooms','Tambaram Pallavaram GST Road, Near Chromepet Bus Stand','Chennai','Tamil Nadu',12.95254,80.140932],
['NDMC Public Toilet','Public Washrooms','Municipal Market Super Bazar Compound  CP (Opposite to HDFC Bank Outer Circle M block)','New Delhi','Delhi', 28.6328567,77.222861 ],
['NDMC Public Toilet','Public Washrooms','L Block Red Light Near CP  Minto Road','New Delhi','Delhi', 28.6344885,77.2220116 ],
['Sulabh Shauchalaya','Public Washrooms','C 230 Service Road Sector 31','Noida','Uttar Pradesh',28.579025,77.346866]
 ];
var map, places, infoWindow;
var markers = [];
var autocomplete;
var countryRestrict = { 'country': 'in' };

function initMap() {

  var centerLat = $('#cityLat').val();
  var centerLng = $('#cityLng').val();

  map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 13,
      scaleControl: true,
      panControl: false,
      zoomControl: true,
      zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
            position: google.maps.ControlPosition.LEFT_BOTTOM
      },
      streetViewControl: false,
      center: new google.maps.LatLng(centerLat, centerLng),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

  infoWindow = new google.maps.InfoWindow();
  plotMarkers();
  autocomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')),
      {
        types: ['(cities)'],
        componentRestrictions: countryRestrict
      });
  places = new google.maps.places.PlacesService(map);
  google.maps.event.addListener(autocomplete, 'place_changed', onPlaceChanged);
}

// When the user selects a city, get the place details for the city and
// zoom the map in on the city.
function onPlaceChanged() {
  var place = autocomplete.getPlace();
  if (place.geometry) {
    map.panTo(place.geometry.location);
    map.setZoom(13);
    plotMarkers();
    $('#city').val(place.name);
    $('#cityLat').val(place.geometry.location.lat());
    $('#cityLng').val(place.geometry.location.lng());
  } else {
    document.getElementById('autocomplete').placeholder = 'Enter a city';
  }
}

function plotMarkers() {
	for (i = 0; i < locations.length; i++) {  
	      marker = new google.maps.Marker({
	        position: new google.maps.LatLng(locations[i][5], locations[i][6]),
	        map: map,
	        icon: 'img/marker.png'
	      });

			google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
					var content = '<div class="marker-info">';
					content = content+'<b>'+locations[i][0] + '</b><br/>' + locations[i][2] + '<br/>' + locations[i][3] + ', ' + locations[i][4];
					infoWindow.setContent(content);
					infoWindow.open(map, marker);
				}
		})(marker, i));	
	}
}

if (document.addEventListener) {

    document.addEventListener('contextmenu', function (e) {
	//here you draw your own menu

	$('#context-menu').css({
	    'top': e.pageY - 12,
	    'left': e.pageX - 12,
	    'position': 'absolute'
	});
	//$('#context-menu').show();
	e.preventDefault();
    }, false);

} 
else {

    document.attachEvent('oncontextmenu', function () {
	window.event.returnValue = false;
    });
}
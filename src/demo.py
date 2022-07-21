from selenium import webdriver
from webdriver_manager.chrome  import ChromeDriverManager
from selenium.webdriver.common.by import By
import time

driver=webdriver.Chrome(executable_path=ChromeDriverManager().install())
driver.maximize_window()

driver.get("http://localhost:3000/")

# driver.find_element(By.XPATH,'button[text="submit"]').send_keys("Pratik Patil")

# driver.close()

import pdb
n = driver.find_element(By.ID,'name')
n.send_keys("qa testing")
e = driver.find_element(By.ID,'email')
e.send_keys("test")
p = driver.find_element(By.ID,'phone')
p.send_keys("test")
z = driver.find_element(By.ID,'zipcode')
z.send_keys(5)
s = driver.find_element(By.XPATH,'//*[@id="root"]/div/div/div/form/button')
time.sleep(10)
s.click()
time.sleep(100)
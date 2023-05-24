package com.bulutmd.mysql;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class UserController {

  @Autowired
  private UserRepository userRepository;

  @RequestMapping(value = "/api/forms", method = RequestMethod.POST)
  public ResponseEntity<String> createUser(@RequestBody UserTable user) {
    // Form verilerini model sınıfına bağlayan API endpoint'i
    userRepository.save(user); // JPA ile veritabanına kaydetme

    return ResponseEntity.ok("Kullanıcı başarıyla kaydedildi.");
  }
}
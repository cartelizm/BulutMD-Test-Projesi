package com.bulutmd.mysql;

import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
@Table(name = "forms")
public class UserTable {

  @Column(nullable = false)
  private String name;

  @Column(nullable = false)
  private String surname;

  @Column(nullable = false, unique = true)
  private String email;

  @Column(nullable = false)
  private String phoneNumber;

  @Column(nullable = false)
  private String identity;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false)
  private Long id;

  @Column(nullable = false)
  private String birth;

  @Column(nullable = false)
  private String address;

  @Column(nullable = false)
  private String question1;

  @Column(nullable = false)
  private String question2;

  @Column(nullable = false)
  private String question3;

  @Column(nullable = true)
  private String wantToAdd;

  public String getName() {
    return name;
  }

  public String getSurname() {
    return surname;
  }

  public String getEmail() {
    return email;
  }

  public String getPhoneNumber() {
    return phoneNumber;
  }

  public String getIdentity() {
    return identity;
  }

  public Long getId() {
    return id;
  }

  public String getBirth() {
    return birth;
  }

  public String getAddress() {
    return address;
  }

  public String getQuestion1() {
    return question1;
  }

  public String getQuestion2() {
    return question2;
  }

  public String getQuestion3() {
    return question3;
  }

  public String getWantToAdd() {
    return wantToAdd;
  }

}

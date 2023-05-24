package com.bulutmd.mysql;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class DatabaseInitializer {
  private final JdbcTemplate jdbcTemplate;

  @Autowired
  public DatabaseInitializer(JdbcTemplate jdbcTemplate) {
    this.jdbcTemplate = jdbcTemplate;
  }

  public void initializeDatabase() {
    // Tablo oluşturma sorgusu
    String createTableQuery = "CREATE TABLE IF NOT EXISTS forms (" +
        "name TEXT NOT NULL, " +
        "surname TEXT NOT NULL ," +
        "email TEXT NOT NULL, " +
        "phone_number TEXT NOT NULL, " +
        "identity TEXT(11) NOT NULL, " +
        "birth TEXT NOT NULL, " +
        "address TEXT NOT NULL, " +
        "question1 TEXT NOT NULL, " +
        "question2 TEXT NOT NULL, " +
        "question3 TEXT NOT NULL, " +
        "want_to_add TEXT, " +
        "id INT AUTO_INCREMENT NOT NULL, " +
        "primary key (id)" +
        ")";

    // Tabloyu oluştur
    jdbcTemplate.execute(createTableQuery);
  }
}
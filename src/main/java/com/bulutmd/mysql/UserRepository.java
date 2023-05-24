package com.bulutmd.mysql;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserTable, Long> {
  // Kullanıcılar için özel sorgular ve işlemler burada tanımlanabilir
}

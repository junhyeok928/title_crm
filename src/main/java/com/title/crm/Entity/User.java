package com.title.crm.Entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 10)
    private String username;

    @Column(length = 12)
    private String password;

    @Column(length = 10)
    private String firstName;

    @Column(length = 10)
    private String lastName;

    @Column
    private int age;

    @Column
    private int salary;
}

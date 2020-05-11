package ru.finashka.contacts.feature.contact;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class ContactDto {
    private Long id;
    private String name;
    private String email;
    private String phone;
    private LocalDateTime createdDate;
}

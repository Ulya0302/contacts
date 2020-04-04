package ru.finashka.contacts.shared.persistent;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class Page<T> {
    private List<T> data;
    private Long total;
}

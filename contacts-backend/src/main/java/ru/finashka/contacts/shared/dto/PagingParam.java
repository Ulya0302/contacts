package ru.finashka.contacts.shared.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PagingParam {
    private Integer pageSize;
    private Integer pageNumber;
    private String sortDirection;
    private String sortColumn;
}

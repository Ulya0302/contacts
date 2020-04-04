package ru.finashka.contacts.shared.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ListResponse<T> {
    private boolean success = true;
    private List<T> data;
    private String msg;

    public ListResponse(List<T> data) {
        this.data = data;
    }

    public ListResponse(Throwable ex) {
        this.success = false;
        this.msg = ex.getMessage();
    }
}

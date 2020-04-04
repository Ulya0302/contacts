package ru.finashka.contacts.exception;

public class NotFoundException extends RuntimeException {
    public NotFoundException(Class<?> clazz, Object id) {
        super(String.format("Can't found entity %s(%s)", clazz.getSimpleName(), id));
    }
}

.PHONY: lint test fix all

lint:
	ruff check .
	black --check .
	mypy src/

test:
	pytest --cov=src --cov-report=term-missing

fix:
	ruff check --fix .
	black .

all: lint test

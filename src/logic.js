export default function check1(number, initial_base, change_base) {
  let response = 0;
  let max_number_value = null;
  let division_number = 0;
  let division_number_reminder = 0;
  let dot_pos = 0;
  let symbol = 0;
  let numbers = [];

  for (let i in number) {
    // check on symbols
    switch (number[i]) {
      case '-':
        number[0] = 0;
        break;
      case 'A':
        numbers[i] = '10';
        symbol++;
        break;
      case 'B':
        numbers[i] = '11';
        symbol++;
        break;
      case 'C':
        numbers[i] = '12';
        symbol++;
        break;
      case 'D':
        numbers[i] = '13';
        symbol++;
        break;
      case 'E':
        numbers[i] = '14';
        symbol++;
        break;
      case 'F':
        numbers[i] = '15';
        symbol++;
        break;
      case '.':
        dot_pos = i;

      // set num on default

      default:
        numbers[i] = number[i];
        symbol++;
        break;
    }
  }

  // log array of numbers for debbug
  // console.log(numbers);

  // check on exists .

  // none exist .
  if (dot_pos == 0) {
    max_number_value = numbers.length;

    // set to base 10 system

    for (let i in numbers) {
      response = response + numbers[i] * initial_base ** (max_number_value - 1);
      max_number_value = max_number_value - 1;
    }

    // console.log(response, 123);
    division_number = Number(response);

    response = '';

    // set to finder base
    while (division_number > 0) {
      division_number_reminder = division_number;
      division_number =
        (division_number - (division_number % change_base)) / change_base;
      switch (division_number_reminder % change_base) {
        case 10:
          response = 'A' + response;
          break;
        case 11:
          response = 'B' + response;
          break;
        case 12:
          response = 'C' + response;
          break;
        case 13:
          response = 'D' + response;
          break;
        case 14:
          response = 'E' + response;
          break;
        case 15:
          response = 'F' + response;
          break;
        default:
          response = (division_number_reminder % change_base) + response;
      }
      if (division_number == 0) {
        break;
      }
    }

    // return pespose without .
    return response;
  } else {
    let char_to_point = dot_pos;
    let char_after_point = symbol - dot_pos - 1;
    let nums_chars_to_point = [];
    let nums_chars_after_point = [];
    let resp_after_point = 0;
    let fpart = '';

    for (let i = 0; i < char_to_point; i++) {
      nums_chars_to_point[i] = number[i];
    }
    let positionNumber = 0;

    for (let i = ++dot_pos; i < symbol; i++) {
      nums_chars_after_point[positionNumber] = number[i];
      // console.log(number[i]);
      positionNumber++;
    }

    for (let i in nums_chars_to_point) {
      switch (nums_chars_to_point[i]) {
        case 'A':
          nums_chars_to_point[i] = '10';
          break;
        case 'B':
          nums_chars_to_point[i] = '11';
          break;
        case 'C':
          nums_chars_to_point[i] = '12';
          break;
        case 'D':
          nums_chars_to_point[i] = '13';
          break;
        case 'E':
          nums_chars_to_point[i] = '14';
          break;
        case 'F':
          nums_chars_to_point[i] = '15';
          break;

        default:
          nums_chars_to_point[i] = nums_chars_to_point[i];
          symbol++;
          break;
      }
    }

    for (let i in nums_chars_after_point) {
      switch (nums_chars_after_point[i]) {
        case 'A':
          nums_chars_after_point[i] = '10';
          break;
        case 'B':
          nums_chars_after_point[i] = '11';
          break;
        case 'C':
          nums_chars_after_point[i] = '12';
          break;
        case 'D':
          nums_chars_after_point[i] = '13';
          break;
        case 'E':
          nums_chars_after_point[i] = '14';
          break;
        case 'F':
          nums_chars_after_point[i] = '15';
          break;

        default:
          nums_chars_after_point[i] = nums_chars_after_point[i];
          symbol++;
          break;
      }
    }

    max_number_value = nums_chars_to_point.length;

    for (let i in nums_chars_to_point) {
      response =
        response +
        nums_chars_to_point[i] * initial_base ** (max_number_value - 1);
      max_number_value = max_number_value - 1;
    }

    for (let i in nums_chars_after_point) {
      resp_after_point =
        resp_after_point +
        nums_chars_after_point[i] * initial_base ** (max_number_value - 1);
      max_number_value = max_number_value - 1;
    }

    // console.log(resp_after_point);
    for (let i = 0; i < 10 /* number after dot */; i++) {
      resp_after_point = resp_after_point * change_base;
      if (resp_after_point == 1) {
        resp_after_point = Number(resp_after_point);
        fpart = fpart + '' + (resp_after_point - (resp_after_point % 1));
        resp_after_point = resp_after_point % 1;
        break;
      }
      resp_after_point = Number(resp_after_point);
      fpart = fpart + '' + (resp_after_point - (resp_after_point % 1));
      resp_after_point = resp_after_point % 1;
    }
    // console.log(response + '.' + fpart);
    division_number = Number(response);
    response = '';
    while (division_number > 0) {
      division_number_reminder = division_number;
      division_number =
        (division_number - (division_number % change_base)) / change_base;
      switch (division_number_reminder % change_base) {
        case 10:
          response = 'A' + response;
          break;
        case 11:
          response = 'B' + response;
          break;
        case 12:
          response = 'C' + response;
          break;
        case 13:
          response = 'D' + response;
          break;
        case 14:
          response = 'E' + response;
          break;
        case 15:
          response = 'F' + response;
          break;
        default:
          response = (division_number_reminder % change_base) + response;
      }
      if (division_number == 0) {
        break;
      }
    }
    // console.log(response + '.' + fpart);
    return response + '.' + fpart;
  }
}

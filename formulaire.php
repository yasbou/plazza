<?php
ini_set('display_errors',1);

print_r($_POST);
echo '<br>';




if (isset($_POST["button"])){


  //verifier la validiter des champs
//-envoyer le formulaire par mail

  if(
    empty($_POST['name'])||
    empty($_POST['lastname']) ||
    empty($_POST['e-mail']) ||
    empty($_POST['message']))
    {
    $errors['empty'] = "Ce champs doit être renseigné";
    }

    if(!filter_var($_POST['e-mail'], FILTER_VALIDATE_EMAIL)){
      $errors['valide'] = " n'est pas une adresse e_mail valide";
    }

      $to = 'yacine.bouhsen@gmail.com';
      $subject = $_POST['name'].$_POST['lastname']."a pris contact avec vous.";
      $message= $_POST['message'];
      $headers = 'From:'.$_POST['e-mail'];

$mailsent = mail($to, $subject, $message, $headers);


if ($mailsent){
  header('Location: mail_success.php');
exit();
}
else{
  echo 'ko';
}
};
